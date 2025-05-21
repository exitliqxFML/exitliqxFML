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
          <th
            style={{
              textAlign: 'left',
              padding: '12px',
              border: `1px solid var(--neon)`,
              color: 'var(--neon)',
            }}
          >
            Name
          </th>
          <th
            style={{
              textAlign: 'left',
              padding: '12px',
              border: `1px solid var(--neon)`,
              color: 'var(--neon)',
            }}
          >
            Risk (1–100)
          </th>
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
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = '#262626')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'transparent')
            }
          >
            <td
              style={{
                padding: '12px',
                border: `1px solid var(--neon)`,
              }}
            >
              {item.name}
            </td>
            <td
              style={{
                padding: '12px',
                border: `1px solid var(--neon)`,
                verticalAlign: 'middle',
              }}
            >
              {/* Numeric value */}
              <div style={{ marginBottom: '4px' }}>{item.score}</div>
              {/* Progress bar */}
              <div
                style={{
                  background: '#111',
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    background: 'var(--neon)',
                    width: `${item.score}%`,
                    height: '100%',
                  }}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
