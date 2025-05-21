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
        <tr style={{ background: '#1a1a1a' }}>
          {['Name', 'Risk Score'].map((h) => (
            <th
              key={h}
              style={{
                textAlign: 'left',
                padding: '12px',
                border: `1px solid var(--neon)`,
                color: 'var(--neon)',
              }}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            style={{
              borderBottom: `1px solid var(--neon)`,
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#262626')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <td style={{ padding: '12px', border: `1px solid var(--neon)` }}>
              {item.name}
            </td>
            <td style={{ padding: '12px', border: `1px solid var(--neon)` }}>
              {item.score}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
