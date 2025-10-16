import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus feature: "Minutes to Read"
  let readTime = "";
  if (minutes) {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      readTime = "☕️".repeat(cups);
    } else {
      const bentos = Math.ceil(minutes / 10);
      readTime = "🍱".repeat(bentos);
    }
    readTime += ` ${minutes} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} {readTime}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
