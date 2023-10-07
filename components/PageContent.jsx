/**
 * @function PageContent
 * The PageContent React component implements a simple example static page content.
 * @parent components
 * @returns import("react").Element 
 */
export default function PageContent() {
  return (
    <>
      <style jsx>{`
        div {
          border: 1px solid black;
        }
      `}</style>
      <div>
        This content is loaded dynamically
      </div>
    </>
  );
}