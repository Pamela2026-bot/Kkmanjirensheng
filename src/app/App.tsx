import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ResponsiveWrapper from "@/app/components/ResponsiveWrapper";
import ScriptPage from "@/app/components/ScriptPage";
import LoadingPage from "@/app/components/LoadingPage";
import DrawingLoadingPage from "@/app/components/DrawingLoadingPage";
import ComicResultPage from "@/app/components/ComicResultPage";
import ShareOverlay from "@/app/components/ShareOverlay";
import CustomToast from "@/app/components/CustomToast";
import ComicStyleSelection from "@/app/components/ComicStyleSelection";
import GuangDianLiZi from "@/app/components/GuangDianLiZi";
import ImgTuanzi2 from "@/imports/ImgTuanzi2";
import { generateScript } from "@/utils/generateScript";
import { generateComicImages } from "@/utils/generateComicImage";
import type { PanelData } from "@/utils/generateScript";
import svgPaths from "@/imports/svg-tiz03u7qeq";

// Import all images from Figma
import imgBg from "figma:asset/a414cc1cab9532be936d7017bf7b90b9478bb82f.png";
import imgGroups1 from "figma:asset/78de72127505462b15e72a0e27b2247c78e06c34.png";
import imgBgNeirong from "figma:asset/cb50e47ac21ede477f3a8f4c8676b039fcd538d5.png";
import imgDengpao from "figma:asset/b7f4048c7007d2bededa6552d67be0b630090bb8.png";
import imgDenglong from "figma:asset/c429b6ee4e33878fd1233ec4aab222b7ba651367.png";
import imgEmo from "figma:asset/d11bae0c4a990af9f311de74cb74ba8942251105.png";
import imgShangchuan1 from "figma:asset/8bc68a58078960f25d10cdd9cbefd4f89506c20d.png";
import imgButton from "figma:asset/9d17f46e43c53e5709b80964a914732dc3612d5d.png";
import imgLogo from "figma:asset/c301e171aed62395c79f7ef941923a62626a0795.png";
import img from "figma:asset/cacfd9097e1934d3ced6fd030f4b6949d7355d1d.png";
import img1 from "figma:asset/0998c63f86525358d26fafa731b3801081346889.png";
import imgQ from "figma:asset/faef3107ff6973d86c8cbf3fb1a6365202db6d1a.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "script" | "loading" | "drawing" | "result"
  >("home");
  const [selectedStyle, setSelectedStyle] = useState<
    string | null
  >("japanese");
  const [selectedTopics, setSelectedTopics] = useState<
    Set<string>
  >(new Set());
  const [storyText, setStoryText] = useState("");
  const [uploadedImages, setUploadedImages] = useState<
    string[]
  >([]);
  const [topicRotations, setTopicRotations] = useState({
    mogui: 0,
    chunjie: 0,
    shenxian: 0,
    suliao: 0,
    youdu: 0,
    laoshi: 0,
  });
  const [generatedPanels, setGeneratedPanels] = useState<
    PanelData[]
  >([]);
  const [
    isReturningFromOtherPage,
    setIsReturningFromOtherPage,
  ] = useState(false);
  const [generatedComicImages, setGeneratedComicImages] =
    useState<string[]>([]);
  const isGeneratingImage = useRef(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isShareOverlayOpen, setIsShareOverlayOpen] =
    useState(false);
  // 保存用于生成漫画的剧本内容，用于"重新编辑"功能
  const [savedPanelsForEdit, setSavedPanelsForEdit] = useState<
    PanelData[]
  >([]);
  // 保存生成的漫画标题
  const [comicTitle, setComicTitle] =
    useState<string>("快看！漫画我的故事");
  // 保存四格漫画的布局类型
  const [comicLayoutType, setComicLayoutType] =
    useState<number>(1);

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 2000);
  };

  // Topic configurations
  const topicItems = [
    {
      id: "chunjie",
      text: "春节名场面",
      type: "hot" as const,
      icon: imgDenglong,
      fontFamily: "Medium",
    },
    {
      id: "mogui",
      text: "魔鬼亲戚",
      type: "hot" as const,
      icon: imgEmo,
      fontFamily: "Medium",
    },
    {
      id: "suliao",
      text: "塑料友情",
      type: "normal" as const,
      fontSize: "23.649px",
      fontFamily: "Medium",
    },
    {
      id: "shenxian",
      text: "神仙对象",
      type: "normal" as const,
      fontSize: "24px",
      fontFamily: "Medium",
    },
    {
      id: "youdu",
      text: "有毒父母",
      type: "normal" as const,
      fontSize: "23.649px",
      fontFamily: "Medium",
    },
    {
      id: "laoshi",
      text: "我的老师",
      type: "normal" as const,
      fontSize: "23.649px",
      fontFamily: "Medium",
    },
  ];

  // Topic prompts (keeping existing logic)
  const topicPrompts = {
    shenxian: [
      "我梦见自己成了神仙，能飞天遁地，第一件事就是飞回老家看望爷爷奶奶...",
      "如果我有神仙的法力，我想让所有人的新年愿望都能实现，从帮邻居阿姨找到丢失的猫咪开始...",
      "传说中的神仙下凡了，就在我们小区的超市门口，他说要帮大家实现一个愿望...",
      "我在山里迷路时遇到了一位神仙，他给了我三个锦囊，说能在关键时刻帮助我...",
      "新年第一天，我醒来发现自己变成了灶神，负责记录每家每户的善恶...",
    ],
    mogui: [
      "大年三十，魔鬼亲戚们组团来袭：大姨问工资，二姨催婚，三姨比孩子成绩...",
      "春节聚会上，表哥开始了他的传统项目——当众揭我小时候尿床的黑历史...",
      '七大姑八大姨围成一圈，开启了灵魂拷问模式："有对象了吗？""工资多少？""什么时候买房？"',
      '亲戚家的熊孩子来了，他盯上了我珍藏多年的手办，他妈妈说："就是个玩具，让弟弟玩玩怎么了？"',
      '过年最怕的不是没红包，而是收到红包后，妈妈说的那句："先放我这儿，给你存着..."',
    ],
    chunjie: [
      "除夕夜，全家人围坐在一起包饺子，我偷偷在一个饺子里包了一枚硬币...",
      "大年初一，我和爸爸一起去放鞭炮，结果点燃后发现引线太短，我们俩撒腿就跑...",
      "春晚开始了，奶奶每年都要吐槽节目不如以前好看，但还是看得津津有味...",
      "年夜饭上，爷爷喝多了开始讲他年轻时的故事，这个故事我已经听了二十年...",
      "大年初二回娘家，妈妈和姥姥在厨房里忙活，我偷偷溜进去偷吃了一块红烧肉...",
    ],
    suliao: [
      '闺蜜发来消息："新年快乐呀！"我秒回祝福，然后我们又开始了为期一年的零交流...',
      "朋友圈里点赞最多的，现实中见面最少，这就是我的塑料姐妹团...",
      "过年聚会，大家都在拍照发圈，却没人愿意聊聊这一年真实的喜怒哀乐...",
      '好朋友说："有空一起吃饭啊！"我说："好啊！"然后我们都知道，这辈子可能都不会约...',
      '新年第一天，我清理了朋友圈里200个"好友"，发现真正会联系的只有那么几个...',
    ],
    youdu: [
      '过年回家，妈妈第一句话："你怎么又胖了？"第二句话："隔壁家的孩子都当经理了..."',
      '我考了90分很开心，爸爸却说："为什么不是100分？你看看人家学霸..."',
      '春节聚会上，父母总是习惯性地揭我的短，然后说："开个玩笑，你怎么这么小气？"',
      '我想学画画，妈妈说："画画能当饭吃吗？还是好好学习，考个公务员吧..."',
      '新年我鼓起勇气说出自己的梦想，父母却说："你就是想得太多，不切实际..."',
    ],
    laoshi: [
      "春节我在街上遇到了小学班主任，她居然还记得我当年偷偷传纸条的糗事...",
      '高中语文老师过年发朋友圈："又老了一岁，但我的学生们都长大了，真好。"我瞬间泪目...',
      '除夕夜，我翻出了初中数学老师送我的笔记本，上面写着："相信自己，你一定可以！"',
      "过年回母校，发现教我的老师都退休了，那些年被我气到跳脚的他们，如今头发都白了...",
      '新年第一天，我收到了老师的祝福："无论走多远，都不要忘记当初为什么出发。"',
    ],
  };

  const toggleTopic = (topicId: string) => {
    const newTopics = new Set(selectedTopics);
    if (newTopics.has(topicId)) {
      newTopics.delete(topicId);
    } else {
      newTopics.add(topicId);
    }
    setSelectedTopics(newTopics);

    if (topicId in topicRotations) {
      setTopicRotations((prev) => ({
        ...prev,
        [topicId]: prev[topicId] + 360,
      }));
    }

    if (topicId in topicPrompts) {
      const prompts =
        topicPrompts[topicId as keyof typeof topicPrompts];
      const randomPrompt =
        prompts[Math.floor(Math.random() * prompts.length)];
      setStoryText(randomPrompt);
    }
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: string[] = [];
    const remainingSlots = 4 - uploadedImages.length;
    const filesToProcess = Math.min(
      files.length,
      remainingSlots,
    );

    for (let i = 0; i < filesToProcess; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          newImages.push(event.target.result as string);
          if (newImages.length === filesToProcess) {
            setUploadedImages([
              ...uploadedImages,
              ...newImages,
            ]);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(
      uploadedImages.filter((_, i) => i !== index),
    );
  };

  useEffect(() => {
    if (currentPage === "loading") {
      const result = generateScript(
        storyText,
        selectedStyle,
        selectedTopics,
      );
      setGeneratedPanels(result.panels);
      setComicTitle(result.title); // 保存生成的标题
      // 按照概率随机选择布局类型：布局1(50%), 布局4(25%), 布局5(25%)
      const random = Math.random();
      let layoutType;
      if (random < 0.5) {
        layoutType = 1; // 50%概率
      } else if (random < 0.75) {
        layoutType = 4; // 25%概率
      } else {
        layoutType = 5; // 25%概率
      }
      setComicLayoutType(layoutType);
      const timer = setTimeout(
        () => setCurrentPage("script"),
        3000,
      );
      return () => clearTimeout(timer);
    }
  }, [currentPage, storyText, selectedStyle, selectedTopics]);

  useEffect(() => {
    if (currentPage === "drawing") {
      isGeneratingImage.current = false;
      const generateImage = async () => {
        try {
          if (
            selectedStyle &&
            generatedPanels.length > 0 &&
            !isGeneratingImage.current
          ) {
            isGeneratingImage.current = true;
            console.log(
              "开始生成漫画图片, 风格:",
              selectedStyle,
            );
            console.log("分镜数据:", generatedPanels);
            const imageUrls = await generateComicImages(
              generatedPanels,
              selectedStyle,
            );
            console.log("生成的图片URLs:", imageUrls);
            setGeneratedComicImages(imageUrls);
            console.log("图片已设置到state");
          }
        } catch (error) {
          console.error("生成漫画图片失败:", error);
        }
      };
      generateImage();
      const timer = setTimeout(
        () => setCurrentPage("result"),
        3000,
      );
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  if (currentPage === "script") {
    return (
      <ResponsiveWrapper>
        <ScriptPage
          initialPanels={generatedPanels}
          onStartDrawing={(editedPanels) => {
            setGeneratedPanels(editedPanels);
            setSavedPanelsForEdit(editedPanels); // 保存剧本内容用于"重新编辑"
            setCurrentPage("drawing");
          }}
          onBack={() => {
            setIsReturningFromOtherPage(true);
            setCurrentPage("home");
            setTimeout(
              () => setIsReturningFromOtherPage(false),
              500,
            );
          }}
        />
      </ResponsiveWrapper>
    );
  }

  if (currentPage === "loading") {
    return (
      <ResponsiveWrapper>
        <LoadingPage />
      </ResponsiveWrapper>
    );
  }

  if (currentPage === "drawing") {
    return (
      <ResponsiveWrapper>
        <DrawingLoadingPage />
      </ResponsiveWrapper>
    );
  }

  if (currentPage === "result") {
    return (
      <>
        <ResponsiveWrapper>
          <ComicResultPage
            comicTitle={comicTitle}
            comicPanelImages={generatedComicImages}
            comicLayoutType={comicLayoutType}
            onRestart={() => {
              setStoryText("");
              setSelectedStyle("japanese");
              setSelectedTopics(new Set());
              setUploadedImages([]);
              setGeneratedComicImages([]);
              setCurrentPage("home");
            }}
            onShare={() => setIsShareOverlayOpen(true)}
            onEdit={() => {
              // 重新编辑：返回到生成剧本状态，恢复保存的剧本内容
              setGeneratedPanels(savedPanelsForEdit);
              setCurrentPage("script");
            }}
          />
        </ResponsiveWrapper>
        <div
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 9999 }}
        >
          <ResponsiveWrapper>
            <div className="pointer-events-auto">
              <ShareOverlay
                isOpen={isShareOverlayOpen}
                onClose={() => setIsShareOverlayOpen(false)}
                comicPanelImages={generatedComicImages}
                comicTitle={comicTitle}
                comicLayoutType={comicLayoutType}
              />
            </div>
          </ResponsiveWrapper>
        </div>
      </>
    );
  }

  // Home Page - 100% Figma Restoration
  return (
    <ResponsiveWrapper>
      <div
        className="bg-white relative w-[750px] min-h-[1624px]"
        data-name="Figma design - 首页1.png"
      >
        <CustomToast
          message={toastMessage}
          isVisible={isToastVisible}
        />

        {/* Background */}
        <div
          className="absolute h-full left-0 top-0 w-[750px]"
          data-name="bg"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgBg}
          />
        </div>

        {/* Story Input Section */}
        <div
          className="absolute bg-[rgba(0,0,0,0)] bottom-[710px] h-[614px] right-0 w-[750px]"
          data-name="Groups"
        >
          {/* Background Card */}
          <div
            className="absolute h-[592px] left-0 top-[19px] w-[750px]"
            data-name="bg_neirong"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgBgNeirong}
            />
          </div>

          {/* Top Line */}
          <div
            className="absolute h-[3px] left-[54px] top-[120px] w-[643px]"
            data-name="img_line_1"
          >
            <div className="absolute inset-[-51.47%_-0.19%_-44.99%_-0.19%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 645.5 5.89402"
              >
                <path
                  d={svgPaths.p32e5d600}
                  fill="var(--stroke-0, #4E4E4E)"
                  id="img_line_1"
                />
              </svg>
            </div>
          </div>

          {/* Placeholder Text */}
          {!storyText && (
            <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[180px] justify-center leading-[0] left-[54px] not-italic opacity-40 text-[#222] text-[28px] top-[212.5px] translate-y-[-50%] w-[642px] pointer-events-none">
              <p className="leading-[45px]">
                例如：大年三十，我回到老家，爷爷奶奶准备了一大桌年夜饭..或者写下你的新年愿望：希望心的一年能升职加薪，脱单成功...
              </p>
            </div>
          )}

          {/* Text Input Area */}
          <div className="absolute left-[54px] top-[144px] w-[642px] h-[180px] z-10">
            <textarea
              value={storyText}
              onChange={(e) => {
                const text = e.target.value;
                if (text.length > 200) {
                  showToast("最大字数不可超过200字");
                  return;
                }
                setStoryText(text);
              }}
              placeholder=""
              className="w-full h-full bg-transparent border-none outline-none text-[#222] text-[28px] resize-none leading-[45px] font-['PingFang_SC:Medium',sans-serif]"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Title */}
          <div
            className="absolute bottom-[535.07px] flex flex-col font-['PingFang_SC'] h-[43.919px] justify-center leading-[0] not-italic right-[695.59px] text-[#2c2c2c] text-[34px] translate-x-[100%] translate-y-[50%] w-[204.955px]"
            style={{ fontWeight: 700 }}
          >
            <p className="leading-[normal]">写下你的故事</p>
          </div>

          {/* Bottom Dotted Line */}
          <div className="absolute h-0 left-[54px] top-[488px] w-[645px]">
            <div className="absolute inset-[-0.5px_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 645 1"
              >
                <path
                  d="M0 0.5H645"
                  id="Line 3"
                  stroke="var(--stroke-0, black)"
                  strokeDasharray="5 5"
                  strokeOpacity="0.5"
                />
              </svg>
            </div>
          </div>

          {/* Topic Label */}
          <div className="absolute content-stretch flex gap-[5px] items-center left-[54px] top-[523px] w-[122px]">
            <div
              className="h-[23.649px] relative shrink-0 w-[13.514px]"
              data-name="dengpao"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgDengpao}
              />
            </div>
            <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3d3a2c] text-[24px]">
              <p className="leading-[normal]">话题灵感:</p>
            </div>
          </div>

          {/* Topic Buttons - Scrollable Container */}
          <div className="absolute left-[196px] top-[514px] w-[494px] h-[66px]">
            <div className="relative w-full h-full">
              {/* Scrollable content */}
              <div
                className="w-full h-full overflow-x-auto overflow-y-hidden"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <style>{`
                  .topic-scroll-container::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <div className="flex gap-[8px] items-center topic-scroll-container">
                  {topicItems.map((topic) => {
                    const isSelected = selectedTopics.has(
                      topic.id,
                    );
                    const rotation =
                      topicRotations[
                        topic.id as keyof typeof topicRotations
                      ] || 0;

                    return (
                      <motion.button
                        key={topic.id}
                        onClick={() => toggleTopic(topic.id)}
                        className="bg-[#f0f0f0] content-stretch flex gap-[4px] h-[51px] items-center py-[2px] relative rounded-[16px] shrink-0"
                        style={{
                          paddingLeft:
                            topic.type === "hot"
                              ? "8px"
                              : "16px",
                          paddingRight: "12px",
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        }}
                      >
                        {topic.type === "normal" && (
                          <div
                            aria-hidden="true"
                            className="absolute border-[#fdf9e7] border-[1.126px] border-solid inset-0 pointer-events-none rounded-[16px]"
                          />
                        )}
                        {topic.type === "hot" && (
                          <div className="relative shrink-0 size-[26px]">
                            <div
                              className={
                                topic.id === "chunjie"
                                  ? "absolute h-[22.523px] left-[23.08%] right-[16.29%] top-[2px]"
                                  : "absolute inset-[7.69%_2.59%_5.68%_2.12%]"
                              }
                            >
                              <img
                                alt=""
                                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                                src={topic.icon}
                              />
                            </div>
                          </div>
                        )}
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <div
                            className={`flex flex-col font-['PingFang_SC:${topic.fontFamily || "Medium"}',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-black whitespace-nowrap`}
                            style={{
                              fontSize:
                                topic.fontSize || "24px",
                            }}
                          >
                            <p className="leading-[normal] whitespace-pre">
                              {topic.text}
                            </p>
                          </div>
                          <motion.div
                            className="relative shrink-0 size-[24px]"
                            animate={{ rotate: rotation }}
                            transition={{
                              duration: 0.6,
                              ease: "easeInOut",
                            }}
                          >
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 24 24"
                            >
                              <g opacity="0.3">
                                <path
                                  clipRule="evenodd"
                                  d={svgPaths.p43c2c00}
                                  fill="#222222"
                                  fillRule="evenodd"
                                />
                              </g>
                            </svg>
                          </motion.div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Gradient Mask - positioned at right edge */}
              <div className="absolute right-0 top-0 h-full w-[60px] bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Upload Reference Image Button */}
          <div className="absolute h-[112.362px] left-[54px] top-[353px] w-[575px] z-10">
            <div className="flex gap-[24px] items-center">
              <AnimatePresence mode="popLayout">
                {uploadedImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={
                      isReturningFromOtherPage
                        ? false
                        : { scale: 0, opacity: 0 }
                    }
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="relative w-[111.486px] h-[102.477px] rounded-[4px] overflow-hidden bg-white"
                  >
                    <img
                      src={image}
                      alt={`上传的图片 ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <motion.button
                      className="absolute top-[4px] right-[4px] w-[32px] h-[32px] bg-black/60 rounded-full flex items-center justify-center"
                      onClick={() => removeImage(index)}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="text-white text-[24px] leading-none flex items-center justify-center h-full">
                        ×
                      </span>
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>

              {uploadedImages.length < 4 && (
                <motion.label
                  initial={
                    isReturningFromOtherPage
                      ? false
                      : { scale: 0, opacity: 0 }
                  }
                  animate={{ scale: 1, opacity: 1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="relative h-[112.362px] w-[111.486px] cursor-pointer"
                >
                  <div className="absolute bottom-[9.88px] h-[102.477px] right-0 w-[111.486px]">
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                      src={imgShangchuan1}
                    />
                  </div>
                  <div className="absolute bottom-[15.77px] flex flex-col font-['PingFang_SC:Medium',sans-serif] h-[31.532px] justify-center leading-[0] not-italic right-[88.97px] text-[#3d3d3d] text-[22px] translate-x-[100%] translate-y-[50%] w-[81.081px] pointer-events-none">
                    <p className="leading-[normal]">参考图</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </motion.label>
              )}
            </div>
          </div>

          {/* Tuanzi Decoration */}
          <div
            className="absolute h-[150px] left-[468px] top-[-30px] w-[210px]"
            data-name="img_tuanzi2"
          >
            <ImgTuanzi2 />
          </div>
        </div>

        {/* Style Selection Section */}
        <div
          className="absolute content-stretch flex flex-col gap-[3px] items-center left-0 top-[942px] w-[750px]"
          data-name="Groups"
        >
          {/* Title */}
          <div
            className="h-[60px] relative shrink-0 w-full"
            data-name="标题"
          >
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[40px] relative size-full">
                <div
                  className="flex flex-col font-['PingFang_SC'] justify-center leading-[0] not-italic relative shrink-0 text-[#443831] text-[34px]"
                  style={{ fontWeight: 700 }}
                >
                  <p className="leading-[normal]">
                    选择漫画风格
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Style Buttons Container */}
          <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] relative shrink-0 w-full">
            <ComicStyleSelection
              selectedStyle={selectedStyle}
              onStyleSelect={setSelectedStyle}
            />
          </div>
        </div>

        {/* Generate Button */}
        <div className="absolute bottom-[2px] content-stretch flex items-start justify-center left-[-1px] overflow-clip pb-[90px] pt-[20px] w-[750px]">
          <motion.button
            className="content-stretch flex h-[90px] items-center justify-center px-[246px] py-[23px] relative shrink-0 w-[687px] cursor-pointer"
            whileTap={{ scale: 0.92 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
            onClick={() => {
              if (
                !storyText.trim() &&
                uploadedImages.length === 0
              ) {
                showToast("请输入故事内容");
                return;
              }
              setCurrentPage("loading");
            }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[102.03%] left-[-0.07%] max-w-none top-[-0.46%] w-full"
                src={imgButton}
              />
            </div>
            <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white">
              <p className="leading-[normal]">生成漫画剧本</p>
            </div>
          </motion.button>
        </div>

        {/* Bottom Logo */}
        <div
          className="absolute h-[38px] left-[313.66px] top-[1562.18px] w-[123px]"
          data-name="logo"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgLogo}
          />
        </div>

        {/* Top Title Image */}
        <div
          className="absolute h-[147px] left-0 top-[153px] w-[750px]"
          data-name="Groups 1"
        >
          {/* 烟花粒子效果 - 覆盖顶部区域 */}
          <div
            className="absolute left-0 top-[-153px] w-[750px] h-[300px]"
            style={{ zIndex: 1 }}
          >
            <GuangDianLiZi width={750} height={300} />
          </div>

          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgGroups1}
            style={{ zIndex: 2, position: "relative" }}
          />
        </div>
      </div>
    </ResponsiveWrapper>
  );
}