import Link from "next/link";
import Image from "next/image";
import NairaIcon from "../svgicons/NairaIcon";
import LocationIcon from "../svgicons/Location";

function ProjectItem(props) {
  const { title, category, excerpt, image } = props.project;

  const imagePath = `/${image}`;
  const linkPath = `/#`;

  return (
    <div className={`project-item gallery-item group ${category}`}>
      <Link href={linkPath}>
        <div>
          <div className="project-img relative before:absolute before:bg-black before:opacity-5 before:w-full before:h-full before:z-[1]">
            <Image
              src={imagePath}
              alt={title}
              width={472}
              height={400}
              layout="responsive"
              objectFit="cover"
              quality={60}
              priority
              className="rounded-t-md"
            />
          </div>
          <div className="px-4 py-4 bg-white rounded-b-md">
            <h3 className="text-gray-900 font-semibold">
              Fairfield Apartments
            </h3>
            <span className="flex items-center">
              <LocationIcon />
              <h2 className="ml-2">Banana Island, Lagos</h2>
            </span>
            <span className="flex items-center">
              <NairaIcon />
              <h2 className="font-semibold">2,000,000</h2>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectItem;
