// components/LaunchTable.js

export default function LaunchTable({ data }) {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '1rem',
      }}
    >
      <thead>
        <tr style={{ background: '#f3f4f6' }}>
          <th style={{ textAlign: 'left', padding: '8px', border: '1px solid #ddd' }}>
            Name
          </th>
          <th style={{ textAlign: 'left', padding: '8px', border: '1px solid #ddd' }}>
            Risk Score
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} style={{ borderBottom: '1px solid #eee', hover: { background: '#fafafa' } }}>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.name}</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
