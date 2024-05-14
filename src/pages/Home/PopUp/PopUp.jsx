const PopUp = () => {
  return (
    <div>
      <div className="modal-box bg-gradient-to-br from-[#199DFF] to-[#ff391149] bg-opacity-75 mx-auto w-80 md:w-[400px]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col items-center">
          <img src="./discount.png" alt="" className="w-40 md:w-56" />
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-center -mt-6">
            Exclusive Room Booking Discounts!
          </h3>
          <p className="py-2 text-center">
            {" "}
            Limited-time offers available now. Book your stay and save big on
            luxury accommodations. Hurry, don&apos;t miss out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
