import FeedWrapper from "@/components/FeedWrapper";
import StickyWrapper from "@/components/StickyWrapper";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>My sticky sidebar</StickyWrapper>
      <FeedWrapper>My feed</FeedWrapper>
    </div>
  );
};

export default LearnPage;
