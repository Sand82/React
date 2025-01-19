import { useState } from "react";

const FunFactCreate = () => {
  const [funFact, setFunFact] = useState({
    category: "",
    imageUrl: "",
    description: "",
    additionalInfo: "",
  });

  const funFactSubmitHeandler = (e) => {
    e.preventDefault();
  };

  const funFactChangeHeandler = (e) => {
    setFunFact((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const errors = (e) => {};

  return (
    <section id="create">
      <div className="form">
        <h2>Add Fact</h2>
        <form className="create-form" onSubmit={funFactSubmitHeandler}>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Category"
            value={funFact.category}
            onChange={funFactChangeHeandler}
            onBlur={errors}
          />
          <input
            type="text"
            name="imageUrl"
            id="image-url"
            placeholder="Image URL"
            value={funFact.imageUrl}
            onChange={funFactChangeHeandler}
            onBlur={errors}
          />
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows={10}
            cols={50}
            value={funFact.description}
            onChange={funFactChangeHeandler}
            onBlur={errors}
          />
          <textarea
            id="additional-info"
            name="additionalInfo"
            placeholder="Additional Info"
            rows={10}
            cols={50}
            value={funFact.additionalInfo}
            onChange={funFactChangeHeandler}
            onBlur={errors}
          />
          <button type="submit">Add Fact</button>
        </form>
      </div>
    </section>
  );
};

export default FunFactCreate;
