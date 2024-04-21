type Props = {
  children: React.ReactNode;
};

const LessonLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col min-h-screen w-full">{children}</div>
    </div>
  );
};

export default LessonLayout;
