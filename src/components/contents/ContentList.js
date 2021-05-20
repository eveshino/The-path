import ContentItem from "./ContentItem";
import classes from "./ContentList.module.css";

function ContentList(props) {
  return (
    <ul className={classes.list}>
      {props.contents.map((content) => (
        <ContentItem
          key={content.id}
          id={content.id}
          image={content.image}
          title={content.tile}
          address={content.address}
          description={content.description}
        />
      ))}
    </ul>
  );
}

export default ContentList;
