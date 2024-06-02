export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list! 🌟</em>
      </p>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPackedItems * 100) / numItems);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "Everything packed! Good to go ✈️"
          : `🚀 You have already packed ${numPackedItems} items out of ${numItems} (${percentagePacked}%) from your list.`}
      </em>
    </footer>
  );
}
