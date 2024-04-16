import { getCourses, getUserProgress } from "@/db/queries";
import List from "./list";

const CoursesPage = async () => {
  // not necessarily data, rather a promise of data
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  // may or may not help with waterfall but unsure due to this being a server component
  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <List
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
      />
    </div>
  );
};

export default CoursesPage;
