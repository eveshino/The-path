import { useHistory } from "react-router-dom";

import NewContentForm from "../components/contents/NewContentForm";

function NewContentPage() {
  const history = useHistory();
  function addContentHandler(contentData) {
    fetch(
      "https://react-getting-started-7a09b-default-rtdb.asia-southeast1.firebasedatabase.app/contents.json",
      {
        method: "POST",
        body: JSON.stringify(contentData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Content</h1>
      <NewContentForm onAddContent={addContentHandler} />
    </section>
  );
}

export default NewContentPage;
