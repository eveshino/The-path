import { useState, useEffect } from "react";
import ContentList from "../components/contents/ContentList";

function AllContentsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedContent, setLoadedContent] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-7a09b-default-rtdb.asia-southeast1.firebasedatabase.app/contents.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const contents = [];

        for (const key in data) {
          const content = {
            id: key,
            ...data[key],
          };

          contents.push(content);
        }
        setIsLoading(false);
        setLoadedContent(contents);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <>
      <h1>All Contents</h1>
      <ContentList contents={loadedContent} />
    </>
  );
}

export default AllContentsPage;
