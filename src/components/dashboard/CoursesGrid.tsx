// ✅ Correct
import { getCourses } from "@/lib/queries";
import { MOCK_COURSES } from "@/lib/mock-data";
import { CourseCard } from "./CourseCard";
import { CourseGridWrapper } from "./CourseGridWrapper";

export async function CoursesGrid() {
  let courses = MOCK_COURSES;

  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const hasValidCreds =
      url &&
      key &&
      url !== "https://your-project-ref.supabase.co" &&
      key !== "your-anon-key-here";

    if (hasValidCreds) {
      const fetched = await getCourses();
      if (fetched.length > 0) courses = fetched;
    }
  } catch (err) {
    // fall back to mock data silently in dev
    console.warn("Supabase fetch failed, using mock data:", err);
  }

  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-4">
      <CourseGridWrapper>
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </CourseGridWrapper>
    </div>
  );
}
