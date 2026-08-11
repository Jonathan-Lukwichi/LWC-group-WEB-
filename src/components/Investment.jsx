import { investment as inv } from '../data/content'

export default function Investment() {
  return (
    <section className="section" id="investment">
      <div className="container">
        <div className="kicker reveal">{inv.kicker}</div>
        <h2 className="h2 reveal" style={{ maxWidth: '18ch' }}>{inv.title}</h2>
        <table className="table reveal">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Duration</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {inv.rows.map((r, i) => (
              <tr key={i}>
                <td>{r[0]}</td>
                <td>{r[1]}</td>
                <td className="fee">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="table__note">{inv.note}</p>
      </div>
    </section>
  )
}
