import CourseNode, { CourseNodeProps } from "./CourseNode";
import { motion } from 'framer-motion'
import BreadCrumbNav from "./BreadcrumbNav";
interface CourseMapProps {
    CourseId: number
}


// Entire View of the Course Map
const CourseMap = ({ CourseId }: CourseMapProps) => {
    return (
        <>
            <BreadCrumbNav />
            <motion.main
                className="flex items-center gap-10"
                initial={{ scale: 0, y: -100 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, y: -100 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
                <CourseNode
                    key={CourseId}
                    CourseId={CourseId}
                    CourseName="Introduction to Programming"
                />
                <div className="grid gap-10">
                    {MockRelateCourse.map((item) => {
                        return (
                            <CourseNode
                                key={item.CourseId}
                                CourseId={item.CourseId}
                                CourseName={item.CourseName}
                            />
                        )
                    })}
                </div>

            </motion.main>
        </>
    )
}
const MockRelateCourse: CourseNodeProps[] = [
    {
        CourseId: 2,
        CourseName: "Web Development"
    },
    {
        CourseId: 3,
        CourseName: "Ruby on Rails"
    },
    {
        CourseId: 4,
        CourseName: "JavaScript"
    },
    {
        CourseId: 5,
        CourseName: "React"
    },
    {
        CourseId: 6,
        CourseName: "Node.js"
    }
]


export default CourseMap;