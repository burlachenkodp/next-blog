export default function Message({ children, avatar, username, description }) {
  return (
    <div className="bg-white p-8 border-b-2 rounded-lg">
      <div className="flex items-center gap-2">
        <picture>
          <source srcSet={avatar} type="image/webp" />
          <img
            src={avatar}
            alt="Landscape picture"
            className="w-10 rounded-full"
          />
        </picture>
        <h2>{username}</h2>
      </div>
      <div className="py-4">
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
