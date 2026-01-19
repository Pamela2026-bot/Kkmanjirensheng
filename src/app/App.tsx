import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ResponsiveWrapper from "@/app/components/ResponsiveWrapper";
import ScriptPage from "@/app/components/ScriptPage";
import LoadingPage from "@/app/components/LoadingPage";
import DrawingLoadingPage from "@/app/components/DrawingLoadingPage";
import ComicResultPage from "@/app/components/ComicResultPage";
import ShareOverlay from "@/app/components/ShareOverlay";
import StyleButton from "@/app/components/StyleButton";
import TopHeader from "@/app/components/TopHeader";
import CustomToast from "@/app/components/CustomToast";
import GuangDianLiZi from "@/app/components/GuangDianLiZi";
import TopicInspirationModule, {
  TopicItem,
} from "@/app/components/TopicInspirationModule";
import { generateScript } from "@/utils/generateScript";
import { generateComicImages } from "@/utils/generateComicImage";
import type { PanelData } from "@/utils/generateScript";
import imgImage from "figma:asset/43f5060b866b8f8120b3cc38de32f021bccdd72e.png";
import imgBackground10 from "figma:asset/284d95d44fc05452223bfdc80ec1ead2992fdfad.png";
import imgImage1 from "figma:asset/41f5bc5ce21f66d19e044c732872e545da5c85c2.png";
import imgImage2 from "figma:asset/d11bae0c4a990af9f311de74cb74ba8942251105.png";
import imgImage3 from "figma:asset/1d8785d386faefce2995b19e9dc624bda0f0a905.png";
import imgImage4 from "figma:asset/c429b6ee4e33878fd1233ec4aab222b7ba651367.png";
import imgImage5 from "figma:asset/06f73549e8831bc7c928c9ce0e18c0f2de4ed78c.png";
import imgImage6 from "figma:asset/b7f4048c7007d2bededa6552d67be0b630090bb8.png";
import imgImage7 from "figma:asset/8bc68a58078960f25d10cdd9cbefd4f89506c20d.png";
import imgImage8 from "figma:asset/0a8396393e973bffff1393e9db032bf3f604abc9.png";
import imgImage9 from "figma:asset/68b77d83ff93b272448ac91a9cdab1e0120570fa.png";
import imgImage10 from "figma:asset/4fe6ded441013e64ccfa57234faf7fc057255ccc.png";
import imgImage11 from "figma:asset/273e876e797790147a08fbf09c34df159b5faafd.png";
import imgImage16 from "figma:asset/0ec1508d134126f142a924d5b76a32b6d79b6b51.png";
import imgImgTuanzi from "figma:asset/b739ae5a918ab7032626d7f0093f191f555f8267.png";
import imgBg from "figma:asset/5a0ac0a879b18c754e27b297ce3c5de07caee829.png";
import imgImage12 from "figma:asset/43192f93114af8b9a5406264c1649eef98b2df77.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "script" | "loading" | "drawing" | "result"
  >("home");
  const [selectedStyle, setSelectedStyle] = useState<
    string | null
  >("japanese"); // 默认选中第一个按钮：日式漫画
  const [selectedTopics, setSelectedTopics] = useState<
    Set<string>
  >(new Set());
  const [storyText, setStoryText] = useState("");
  const [placeholder, setPlaceholder] = useState(
    "例如：大年三十，我回到老家,爷爷奶奶准备了一大桌年夜饭..或者写下你的新年愿望：希望心的一年能升职加薪，脱单成功...",
  );
  const [uploadedImages, setUploadedImages] = useState<
    string[]
  >([]);

  // 所有话题按钮的旋转状态
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

  // 用ref来追踪是否已经开始生成图片，避免重复调用
  const isGeneratingImage = useRef(false);

  // Toast状态管理
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  // 分享浮层状态管理
  const [isShareOverlayOpen, setIsShareOverlayOpen] =
    useState(false);

  // 显示toast的函数
  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
    // 2秒后自动隐藏
    setTimeout(() => {
      setIsToastVisible(false);
    }, 2000);
  };

  // 话题提示词库
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

  // 话题数据配置
  const topicItems: TopicItem[] = [
    {
      id: "chunjie",
      text: "春节名场面",
      type: "hot",
      icon: "denglong",
    },
    { id: "mogui", text: "魔鬼亲戚", type: "hot", icon: "emo" },
    { id: "shenxian", text: "神仙对象", type: "normal" },
    { id: "suliao", text: "塑料友情", type: "normal" },
    { id: "youdu", text: "有毒父母", type: "normal" },
    { id: "laoshi", text: "我的老师", type: "normal" },
  ];

  const toggleTopic = (topicId: string) => {
    const newTopics = new Set(selectedTopics);
    if (newTopics.has(topicId)) {
      newTopics.delete(topicId);
    } else {
      newTopics.add(topicId);
    }
    setSelectedTopics(newTopics);

    // 每次点击都累积旋转360度（仅用于热度话题）
    if (topicId in topicRotations) {
      setTopicRotations((prev) => ({
        ...prev,
        [topicId]: prev[topicId] + 360,
      }));
    }

    // 更新文本内容（如果有对应提示词）
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

  // Loading页面自动跳转逻辑
  useEffect(() => {
    if (currentPage === "loading") {
      // 在loading开始时生成剧本
      const panels = generateScript(
        storyText,
        selectedStyle,
        selectedTopics,
      );
      setGeneratedPanels(panels);

      // 模拟加载过程：等待3秒后跳转到剧本页面
      const timer = setTimeout(() => {
        setCurrentPage("script");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentPage, storyText, selectedStyle, selectedTopics]);

  // 绘图Loading页面自动跳转逻辑 - 独立的useEffect
  useEffect(() => {
    if (currentPage === "drawing") {
      // 重置图片生成标志
      isGeneratingImage.current = false;

      // 在绘图期间生成漫画图片
      const generateImage = async () => {
        try {
          if (
            selectedStyle &&
            generatedPanels.length > 0 &&
            !isGeneratingImage.current
          ) {
            isGeneratingImage.current = true;
            const imageUrls = await generateComicImages(
              generatedPanels,
              selectedStyle,
            );
            setGeneratedComicImages(imageUrls);
          }
        } catch (error) {
          console.error("生成漫画图片失败:", error);
        }
      };

      generateImage();

      // 模拟绘图过程：等待3秒后跳转到结果页面
      const timer = setTimeout(() => {
        setCurrentPage("result");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentPage]); // 只依赖currentPage，避免无限循环

  // 如果当前是剧本页面，显示剧本页面组件
  if (currentPage === "script") {
    return (
      <ResponsiveWrapper>
        <ScriptPage
          initialPanels={generatedPanels}
          onStartDrawing={(editedPanels) => {
            // 保存编辑后的panels
            setGeneratedPanels(editedPanels);
            setCurrentPage("drawing");
          }}
          onBack={() => {
            setIsReturningFromOtherPage(true);
            setCurrentPage("home");
            // 500ms后重置状态，避免影响后续交互
            setTimeout(
              () => setIsReturningFromOtherPage(false),
              500,
            );
          }}
        />
      </ResponsiveWrapper>
    );
  }

  // 如果当前是加载页面,显示加载页面组件
  if (currentPage === "loading") {
    return (
      <ResponsiveWrapper>
        <LoadingPage />
      </ResponsiveWrapper>
    );
  }

  // 如果当前是绘图加载页面,显示绘图加载页面组件
  if (currentPage === "drawing") {
    return (
      <ResponsiveWrapper>
        <DrawingLoadingPage />
      </ResponsiveWrapper>
    );
  }

  // 如果当前是漫画结果页面,显示漫画结果页面组件
  if (currentPage === "result") {
    return (
      <>
        <ResponsiveWrapper>
          <ComicResultPage
            comicPanelImages={generatedComicImages}
            onRestart={() => {
              // 重置所有状态，回到首页
              setStoryText("");
              setSelectedStyle(null);
              setSelectedTopics(new Set());
              setUploadedImages([]);
              setGeneratedComicImages([]);
              setCurrentPage("home");
            }}
            onShare={() => {
              // 显示分享浮层
              setIsShareOverlayOpen(true);
            }}
          />
        </ResponsiveWrapper>

        {/* 分享浮层 - 提升到ResponsiveWrapper外部，确保在最上层 */}
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
              />
            </div>
          </ResponsiveWrapper>
        </div>
      </>
    );
  }

  // 首页
  return (
    <ResponsiveWrapper>
      <div
        className="bg-[rgba(0,0,0,0)] relative w-[750px] h-[1624px]"
        data-name="Figma design - 首页1.png"
      >
        {/* Toast组件 */}
        <CustomToast
          message={toastMessage}
          isVisible={isToastVisible}
        />

        {/* Root */}
        <div
          className="absolute bg-[rgba(0,0,0,0)] h-[1621.622px] left-[-0.9px] right-[0.9px] top-[0.38px]"
          data-name="Root"
        >
          {/* Background */}
          <div
            className="absolute h-[1624px] left-[calc(50%+0.35px)] top-[0.43px] translate-x-[-50%] w-[750px]"
            data-name="bg"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgBg}
            />
          </div>

          {/* Groups - Main content */}
          <div
            className="absolute bg-[rgba(0,0,0,0)] bottom-[115.99px] h-[1505.631px] right-0 w-[750px]"
            data-name="Groups"
          >
            {/* Groups1 - Bottom section with generate button */}
            <div
              className="absolute bg-[rgba(0,0,0,0)] bottom-0 h-[586.712px] right-0 w-[750px]"
              data-name="Groups"
            >
              {/* Generate Button - Full clickable area */}
              <div
                className="absolute bottom-[10.14px] h-[91.216px] right-[31.53px] w-[686.937px]"
                data-name="Image"
              >
                <motion.button
                  className="absolute inset-0 cursor-pointer bg-transparent border-none outline-none"
                  whileTap={{ scale: 0.92 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                  onClick={() => {
                    // 验证是否填写了故事内容
                    if (!storyText.trim()) {
                      showToast("请输入故事内容");
                      return;
                    }
                    console.log("Generate comic script with:", {
                      selectedStyle,
                      selectedTopics:
                        Array.from(selectedTopics),
                      storyText,
                    });
                    setCurrentPage("loading");
                  }}
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgImage}
                  />

                  {/* 文字固定在按钮背景上 */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <p
                      className="font-['PingFang_SC:Bold',sans-serif] text-[32px] text-white leading-normal whitespace-pre-wrap"
                      style={{ fontWeight: 700 }}
                    >
                      生成漫画剧本
                    </p>
                  </div>
                </motion.button>
              </div>

              {/* Groups2 - Style buttons container */}
              <div
                className="absolute bg-[rgba(0,0,0,0)] bottom-[144.2px] h-[349px] right-[47.65px] w-[663px]"
                data-name="Groups"
              >
                {/* Frame3 - All buttons wrapper */}
                <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-[0.06px] top-[-0.04px] w-[651.892px]">
                  {/* Frame - Row 1 */}
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <StyleButton
                      id="japanese"
                      label="日式漫画"
                      isSelected={selectedStyle === "japanese"}
                      onClick={() =>
                        setSelectedStyle("japanese")
                      }
                      characterImage="characters"
                      characterConfig={{
                        containerClass:
                          "absolute left-[3.15px] size-[77.7px] top-[3.15px]",
                        imgWrapperClass:
                          "absolute h-[70.901px] left-[-2.91px] top-[-0.97px] w-[82.718px]",
                        imgClass:
                          "absolute h-[160.19%] max-w-none top-0 w-[1017.46%]",
                        imgStyle: { left: "-0.79%", top: "0" },
                      }}
                      textLeft="82px"
                      textTop="41.54px"
                      width={210}
                      isWide={false}
                    />
                    <StyleButton
                      id="colorful"
                      label="彩色动漫"
                      isSelected={selectedStyle === "colorful"}
                      onClick={() =>
                        setSelectedStyle("colorful")
                      }
                      characterImage="colorful"
                      characterConfig={{
                        containerClass:
                          "absolute left-[10px] size-[77.77px] top-0",
                        imgWrapperClass:
                          "absolute h-[65.558px] left-[1.04px] top-[6.12px] w-[76.163px]",
                        imgClass:
                          "absolute h-[115.74%] max-w-none top-0 w-full",
                        imgStyle: { left: "0", top: "0" },
                      }}
                      textLeft="88.94px"
                      textTop="calc(50%-0.46px)"
                      width={210}
                      isWide={false}
                    />
                    <StyleButton
                      id="ghibli"
                      label="吉卜力风格"
                      isSelected={selectedStyle === "ghibli"}
                      onClick={() => setSelectedStyle("ghibli")}
                      characterImage="characters"
                      characterConfig={{
                        containerClass:
                          "absolute left-[10.06px] size-[77.77px] top-[-0.04px]",
                        imgWrapperClass:
                          "absolute h-[69.415px] left-[-3.48px] top-[-1.62px] w-[85.483px]",
                        imgClass:
                          "absolute h-[160.19%] max-w-none top-0 w-[963.91%]",
                        imgStyle: {
                          left: "-189.47%",
                          top: "0",
                        },
                      }}
                      textLeft="81px"
                      textTop="calc(50%-0.46px)"
                      width={226}
                      isWide={true}
                    />
                  </div>

                  {/* Frame1 - Row 2 */}
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <StyleButton
                      id="shinkai"
                      label="新海诚风格"
                      isSelected={selectedStyle === "shinkai"}
                      onClick={() =>
                        setSelectedStyle("shinkai")
                      }
                      characterImage="characters"
                      characterConfig={{
                        containerClass:
                          "absolute left-[10.06px] size-[77.77px] top-[-0.04px]",
                        imgWrapperClass:
                          "absolute h-[69.415px] left-[-1.94px] top-[0.97px] w-[80.984px]",
                        imgClass:
                          "absolute h-[160.19%] left-[-305.56%] max-w-none top-0 w-[1017.46%]",
                        imgStyle: {
                          left: "-305.56%",
                          top: "0",
                        },
                      }}
                      textLeft="80px"
                      width={226}
                      isWide={true}
                    />
                    <StyleButton
                      id="qversion"
                      label="Q版可爱"
                      isSelected={selectedStyle === "qversion"}
                      onClick={() =>
                        setSelectedStyle("qversion")
                      }
                      characterImage="q"
                      characterConfig={{
                        containerClass:
                          "absolute left-[10px] size-[77.77px] top-0",
                        imgWrapperClass:
                          "absolute h-[66.104px] left-[-0.97px] top-[4.86px] w-[79.714px]",
                        imgClass:
                          "absolute h-[120.63%] max-w-none w-[100.03%]",
                        imgStyle: {
                          left: "-0.6%",
                          top: "0.46%",
                        },
                      }}
                      textLeft="88.94px"
                      textTop="calc(50%-0.46px)"
                      width={210}
                      isWide={false}
                    />
                    <StyleButton
                      id="shonen"
                      label="热血少年漫"
                      isSelected={selectedStyle === "shonen"}
                      onClick={() => setSelectedStyle("shonen")}
                      characterImage="characters"
                      characterConfig={{
                        containerClass:
                          "absolute left-[-0.06px] size-[77.77px] top-[-0.04px]",
                        imgWrapperClass:
                          "absolute h-[69.415px] left-[-1.94px] top-[2.92px] w-[85.804px]",
                        imgClass:
                          "absolute h-[160.19%] max-w-none top-0 w-[960.3%]",
                        imgStyle: {
                          left: "-475.66%",
                          top: "0",
                        },
                      }}
                      textLeft="81px"
                      textTop="calc(50%-0.46px)"
                      width={226}
                      isWide={true}
                    />
                  </div>

                  {/* Frame2 - Row 3 */}
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <StyleButton
                      id="hongkong"
                      label="港漫风格"
                      isSelected={selectedStyle === "hongkong"}
                      onClick={() =>
                        setSelectedStyle("hongkong")
                      }
                      characterImage="characters"
                      characterConfig={{
                        containerClass:
                          "absolute left-[10px] size-[77.77px] top-0",
                        imgWrapperClass:
                          "absolute h-[69.415px] left-0 top-[2.92px] w-[81.305px]",
                        imgClass:
                          "absolute h-[160.19%] max-w-none top-0 w-[1013.44%]",
                        imgStyle: {
                          left: "-607.51%",
                          top: "0",
                        },
                      }}
                      textLeft="85.94px"
                      textTop="calc(50%-0.46px)"
                      width={210}
                      isWide={false}
                    />
                    <StyleButton
                      id="american"
                      label="美式漫画"
                      isSelected={selectedStyle === "american"}
                      onClick={() =>
                        setSelectedStyle("american")
                      }
                      characterImage="characters"
                      characterConfig={{
                        containerClass:
                          "absolute left-[12px] size-[77.77px] top-0",
                        imgWrapperClass:
                          "absolute h-[69.415px] left-[1.94px] top-[0.97px] w-[76.806px]",
                        imgClass:
                          "absolute h-[160.19%] max-w-none top-0 w-[1072.8%]",
                        imgStyle: {
                          left: "-754.81%",
                          top: "0",
                        },
                      }}
                      textLeft="85.94px"
                      textTop="calc(50%-0.46px)"
                      width={210}
                      isWide={false}
                    />
                    <StyleButton
                      id="watercolor"
                      label="水彩插画"
                      isSelected={
                        selectedStyle === "watercolor"
                      }
                      onClick={() =>
                        setSelectedStyle("watercolor")
                      }
                      characterImage="characters"
                      characterConfig={{
                        containerClass:
                          "absolute left-[10px] size-[77.77px] top-0",
                        imgWrapperClass:
                          "absolute h-[69.415px] left-[0.97px] top-[2.92px] w-[77.449px]",
                        imgClass:
                          "absolute h-[160.19%] max-w-none top-0 w-[1063.9%]",
                        imgStyle: {
                          left: "-853.11%",
                          top: "0",
                        },
                      }}
                      textLeft="84.94px"
                      textTop="calc(50%-0.46px)"
                      width={210}
                      isWide={false}
                    />
                  </div>

                  {/* Button9 - Row 4 */}
                  <div className="content-stretch flex items-center relative shrink-0">
                    <StyleButton
                      id="sketch"
                      label="铅笔素描"
                      isSelected={selectedStyle === "sketch"}
                      onClick={() => setSelectedStyle("sketch")}
                      characterImage="characters"
                      characterConfig={{
                        containerClass:
                          "absolute left-[8.53px] size-[77px] top-[-1.47px]",
                        imgWrapperClass:
                          "absolute h-[68.727px] left-[5.19px] top-[2.24px] w-[67.455px]",
                        imgClass:
                          "absolute h-[160.19%] max-w-none top-0 w-[1209.43%]",
                        imgStyle: {
                          left: "-1098.11%",
                          top: "0",
                        },
                      }}
                      textLeft="81.94px"
                      textTop="calc(50%-0.46px)"
                      width={210}
                      isWide={false}
                    />
                  </div>
                </div>
              </div>

              {/* Style selection title */}
              <div
                className="absolute bottom-[533.22px] flex flex-col font-['PingFang_SC:Bold',sans-serif] h-[43.919px] justify-center leading-[0] not-italic right-[690.31px] text-[#443831] text-[32.658px] translate-x-[100%] translate-y-[50%] w-[201.577px]"
                style={{ fontWeight: 800 }}
              >
                <p
                  className="leading-[normal] whitespace-nowrap"
                  style={{ fontWeight: 800 }}
                >
                  选择漫画风格
                </p>
              </div>
            </div>

            {/* Groups3 - Story input section */}
            <div
              className="absolute bg-[rgba(0,0,0,0)] bottom-[593.47px] h-[552.928px] right-[21.4px] w-[692.568px]"
              data-name="Groups"
            >
              {/* Input box background */}
              <div
                className="absolute bottom-[-5.63px] h-[568.694px] right-[11.26px] w-[686.937px] z-0"
                data-name="Image"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgImage5}
                />
              </div>

              {/* 话题灵感滚动容器 - 调整left定位以避免遮挡标题 */}
              <div className="absolute bottom-[24px] left-[167.31px] right-[auto] w-[458px] h-[60px] z-10">
                <TopicInspirationModule
                  topics={topicItems}
                  selectedTopics={Array.from(selectedTopics)}
                  onTopicClick={toggleTopic}
                  topicRotations={topicRotations}
                />
              </div>

              {/* Decorative images */}
              <div
                className="absolute bottom-[42.79px] h-[23.649px] right-[652.03px] w-[13.514px] z-20"
                data-name="Image"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgImage6}
                />
              </div>
              <div
                className="absolute bottom-[427.93px] h-[21.396px] right-[72.58px] w-[584.459px] z-20"
                data-name="Image"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgImage8}
                />
              </div>
              <div
                className="absolute bottom-[472.97px] h-[25.901px] right-[610.36px] w-[32.658px] z-20"
                data-name="Image"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgImage9}
                />
              </div>

              {/* Text labels */}
              <div className="absolute bottom-[54.05px] flex flex-col font-['PingFang_SC:Medium',sans-serif] h-[29.279px] justify-center leading-[0] not-italic right-[647.52px] text-[#3d3a2c] text-[23.649px] translate-x-[100%] translate-y-[50%] w-[103.604px]">
                <p className="leading-[normal] whitespace-pre-wrap">
                  话题灵感:
                </p>
              </div>

              {/* Image upload module - 上传区域 */}
              <div className="absolute bottom-[128px] right-[72.52px] w-[575.45px] h-[102.477px] z-10">
                <div className="flex gap-[12px] items-center">
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
                          className="absolute top-[4px] right-[4px] w-[20px] h-[20px] bg-black/60 rounded-full flex items-center justify-center"
                          onClick={() => removeImage(index)}
                          whileTap={{ scale: 0.9 }}
                        >
                          <span className="text-white text-[14px] leading-none">
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
                      className="relative w-[111.486px] h-[102.477px] cursor-pointer flex flex-col items-center justify-center"
                    >
                      {/* 使用Figma设计的虚线框背景 */}
                      <div className="absolute inset-0">
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                          src={imgImage7}
                        />
                      </div>

                      {/* "参考图"文案固定在上传按钮上，向下移动40px，向左移动3px */}
                      <div
                        className="relative flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic text-[#3d3d3d] text-[22px] pointer-events-none translate-y-[40px] translate-x-[-3px]"
                        style={{ fontWeight: 500 }}
                      >
                        <p
                          className="leading-[normal] whitespace-pre-wrap"
                          style={{ fontWeight: 500 }}
                        >
                          参考图
                        </p>
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

              {/* Text input area */}
              <div className="absolute bottom-[286.28px] right-[72.52px] w-[575.45px] h-[136.261px]">
                <textarea
                  value={storyText}
                  onChange={(e) => setStoryText(e.target.value)}
                  placeholder={placeholder}
                  className="w-full h-full bg-transparent border-none outline-none font-['PingFang_SC:Bold',sans-serif] text-[#2c2c2c] text-[26px] resize-none leading-[44px]"
                  style={{ fontWeight: 700 }}
                />
              </div>

              {/* Story title */}
              <div
                className="absolute bottom-[484.8px] flex flex-col font-['PingFang_SC:Bold',sans-serif] h-[43.919px] justify-center leading-[0] not-italic right-[596.85px] text-[#2c2c2c] text-[32px] translate-x-[100%] translate-y-[50%] w-[204.955px]"
                style={{ fontWeight: 800 }}
              >
                <p
                  className="leading-[normal] whitespace-nowrap"
                  style={{ fontWeight: 800 }}
                >
                  写下你的故事
                </p>
              </div>
            </div>

            {/* Tuanzi character */}
            <div
              className="absolute bottom-[1064.19px] h-[96.847px] right-[78.83px] w-[152.027px]"
              data-name="img_tuanzi"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgImgTuanzi}
              />
            </div>
          </div>

          {/* Side border */}
          <div
            className="absolute bottom-0 h-[1621.622px] right-0 w-[1.126px]"
            data-name="Image"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage12}
            />
          </div>
        </div>

        {/* Groups5 - Top section (logo and title) */}
        <div
          className="absolute bg-[rgba(0,0,0,0)] bottom-[1273.4px] h-[350.225px] right-[0.9px] w-[750px]"
          data-name="Groups"
        >
          {/* 春节光点粒子效果 */}
          <GuangDianLiZi width={750} height={350} />

          {/* 顶部Logo和装饰 - 使用TopHeader组件 */}
          <TopHeader />
        </div>
      </div>
    </ResponsiveWrapper>
  );
}