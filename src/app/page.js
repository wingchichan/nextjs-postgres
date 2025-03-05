import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";
import { lexend } from "@/app/layout";
import { mooLahLah } from "@/app/layout";

// export default function Home() {
//   return (
//     <div>
//       <ProfileCard name="Harry" age="20" location="Leicester" />
//       <ProfileCard name="Frank" />
//       <ProfileCard />
//     </div>
//   );
// }

export default function Home() {
  return (
    <div>
      <h1>
        Check our our range of{" "}
        <span className={mooLahLah.className}>house plants</span>
      </h1>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZEI1q4gJ5nFzkpu6rPogVdF8zCtWyhmglQ&s"
        height={300}
        width={300}
        alt="house plants"
      />
    </div>
  );
}
