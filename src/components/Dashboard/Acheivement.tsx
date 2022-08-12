import { MotionConfig } from 'framer-motion'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AcheivementData as data } from '../../data/index'
const Acheivement = () => {

    // const item = {
    //     hidden: {
    //         opacity: 0,
    //         scale: 0,
    //         transition: { duration: 0.1 }
    //     },
    // }

    return (
        <motion.main className='flex flex-col gap-2 p-4 text-white bg-gray-light rounded-lg '
            key={'acheivement'}
            initial={{ opacity: 0, y: -100, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}

        // exit={'hidden'}
        // variants={item}
        >
            <h1 className='font-bold text-3xl self-end'>Achievement</h1>
            <h1 className='  text-2xl self-end -mt-1'>19 items</h1>
            <div className='flex flex-col gap-2 p-2 overflow-y-auto overflow-x-hidden h-40'>
                {data.map(item => {
                    return <AcheivementList
                        key={item.id}
                        {...item}
                        isCompleted={true}
                    />
                })}
            </div>
            <div className='flex flex-col gap-2 p-2'>
                <h1 className='font-bold text-xl '>Keep it up!</h1>
                <div className='flex flex-col gap-2 p-2 overflow-y-auto overflow-x-hidden h-40'>
                    {data.map(item => {
                        return <AcheivementList
                            key={item.id}
                            {...item}
                            isCompleted={false}
                        />
                    })}
                </div>
            </div>
        </motion.main>
    )
}
interface AcheivementListProps {
    id: number,
    title: string,
    thumbnail: string,
    isCompleted: boolean,
}
const AcheivementList = ({ id, title, thumbnail, isCompleted }: AcheivementListProps) => {
    return (
        <motion.main
            className={`text-white rounded-xl p-2 flex items-center gap-4 shadow
        ${isCompleted ? 'bg-purple-light' : 'bg-gray-normal'}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}

        >
            <div className='rounded-full h-5 w-5 bg-white' />
            <p>{title}</p>
        </motion.main >
    )
}
export default Acheivement;