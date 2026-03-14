/*
Activate it: Use the grid class.

Define the columns: Use grid-cols-X (e.g., grid-cols-3 splits the container into three equal vertical columns).

Add spacing: Use the gap-X utility to create even horizontal and vertical spacing between all the items simultaneously (e.g., gap-4).
 */

function Grid() {
  return (
    // center an element in the middle of the screen using grid
    // <div className="grid place-items-center h-screen">
    //   LOADING...
    // </div>
    <div className="grid grid-cols-3 gap-4 h-screen">
      <div className="bg-red-500 h-24 w-full grid grid-cols-3 gap-4 h-screen">
        <div className="bg-white h-24 w-full">a</div>
        <div className="bg-green-500 h-24 w-full">b</div>
        <div className="bg-blue-500 h-24 w-full">c</div>
      </div>
      <div className="bg-green-500 h-24 w-full">2</div>
      <div className="bg-blue-500 h-24 w-full">3</div>
    </div>
  )
}

export default Grid