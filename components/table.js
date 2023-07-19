export default function Table({ props }) {
  return(
    <table className="border border-black/30 mb-8">
      {props.rows.map((e, i) => {
        return (
          <tr key={i}>
            {e.cells.map((e, i) => {
              return (
                <td className="border border-black/30 p-3">{e}</td>
              )
            })}
          </tr>
        )
      })}
    </table>
  )
}