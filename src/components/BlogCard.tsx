export default function BlogCard(props: any) {
  const { title, preview, date, tag, img, link, published } = props;

  const handleClick = (e: any) => {
    if (published === "false") {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const cardStyles = {
    "--bg-img": `url(${img})`,
    cursor: published === "true" ? "pointer" : "not-allowed",
  };

  return (
    <div className="card-grid-space">
      <a
        className={`card ${published === "false" ? "not-published" : ""}`}
        href={published === "true" ? link : undefined}
        onClick={handleClick}
        style={cardStyles}
      >
        <div>
          <h1>{title}</h1>
          <p>{preview}</p>
          <div className="date">{date}</div>
          <div className="tags">
            <div className="tag">{tag}</div>
          </div>
        </div>
      </a>
    </div>
  );
}
