export default function LaunchTable({ data }) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th>Name</th>
          <th>Risk Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id} className="hover:bg-gray-100">
            <td>{item.name}</td>
            <td>{item.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
