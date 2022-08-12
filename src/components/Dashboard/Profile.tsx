import Image from "next/image";
import profileImg from '../../image/S__38969413.jpg'

const Profile = () => {
    return (
        <main className="flex gap-4 text-white items-center">
            <div className="h-20 w-20 rounded-full overflow-hidden flex justify-center">
                <Image src={profileImg} alt='user-profile' />
            </div>
            <div className="h-full flex flex-col">
                <h1 className=" text-3xl font-bold">Bodeesorn <br /> Kosullawrit</h1>
                <h2>Beginner User</h2>
            </div>
        </main>
    )
}
export default Profile;