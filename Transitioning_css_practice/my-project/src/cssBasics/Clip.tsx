function Clip() {
  return (
    <div className="flex justify-center items-center h-full w-full mt-16">
      
      {/*added flex to center the child */}
      <div className="bg-red-500 h-12 w-36 [clip-path:polygon(10%_0%,_100%_0%,_90%_100%,_0%_100%)] flex justify-center items-center">
        
        {/*added flex to center the text */}
        <div className="bg-black text-red-500 font-bold h-10 w-34 [clip-path:polygon(10%_0%,_100%_0%,_90%_100%,_0%_100%)] flex justify-center items-center">
          Acid Graphics
        </div>

      </div>

    </div>
  )
}

export default Clip