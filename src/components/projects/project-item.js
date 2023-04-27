import Link from "next/link";
import Image from "next/image";

function ProjectItem(props) {
  const { title, category, excerpt, image } = props.project;

  const imagePath = `/${image}`;
  const linkPath = `/#`;

  return (
    <div className={`project-item gallery-item group ${category}`}>
      <Link href={linkPath}>
        <a>
          <div className="project-img relative before:absolute before:bg-black before:opacity-5 before:w-full before:h-full before:z-[1]">
            <Image
              src={imagePath}
              alt={title}
              width={472}
              height={665}
              layout="responsive"
              objectFit="cover"
              quality={60}
              priority
            />
          </div>
          <div className="project-content">
            {/* <span className="project-category">{excerpt}</span> */}
            {/* <h2 className="project-title">{title}</h2> */}
          </div>
        </a>
      </Link>
    </div>
  );
}

export default ProjectItem;
