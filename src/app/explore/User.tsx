import Link from "next/link";

interface PropsData {
  data: { id: number; name: string; nickname: string }[];
}

export default function UserExplore({ data }: PropsData) {
  return (
    <div className="flex flex-col">
      {data.map(({ id, name, nickname }) => (
        <Link key={id} href={`${nickname}`}>
          <p>{name}</p>
        </Link>
      ))}
    </div>
  );
}
