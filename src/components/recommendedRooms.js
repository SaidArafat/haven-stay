import ButtonOutline from "./common/buttons/buttonOutline";
import Slider from "./common/slider";

const RecommendedRooms = () => {
  const rooms = [
    {
      id: 1,
      discount: 25,
      priority: "110",
      imageUrl:
        "https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Single Contrast Room",
      price: "100",
      beds: "2",
      bathroom: "1",
    },
    {
      id: 2,
      discount: 35,
      priority: "120",
      imageUrl:
        "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Double Contrast Room",
      price: "150",
      beds: "3",
      bathroom: "1",
    },
    {
      id: 3,
      discount: 15,
      priority: "110",
      imageUrl:
        "https://images.pexels.com/photos/4153150/pexels-photo-4153150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Single Contrast Room",
      price: "200",
      beds: "3",
      bathroom: "1",
    },

    {
      id: 4,
      discount: 20,
      priority: "160",
      imageUrl:
        "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Double Contrast Room",
      price: "150",
      beds: "3",
      bathroom: "1",
    },
    {
      id: 5,
      discount: 15,
      priority: "220",
      imageUrl:
        "https://images.pexels.com/photos/4153150/pexels-photo-4153150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Single Contrast Room",
      price: "100",
      beds: "2",
      bathroom: "1",
    },
    {
      id: 6,
      discount: 30,
      priority: "190",
      imageUrl:
        "https://images.pexels.com/photos/5490301/pexels-photo-5490301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Single Contrast Room",
      price: "150",
      beds: "3",
      bathroom: "1",
    },
    {
      id: 7,
      discount: 25,
      priority: "120",
      imageUrl:
        "https://images.pexels.com/photos/4153150/pexels-photo-4153150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Double Contrast Room",
      price: "180",
      beds: "2",
      bathroom: "1",
    },
    {
      id: 8,
      discount: 30,
      priority: "220",
      imageUrl:
        "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Single Contrast Room",
      price: "150",
      beds: "3",
      bathroom: "1",
    },
  ];

  return (
    <section className="mt-5 pt-5">
      <header className="d-flex justify-content-between align-items-center">
        <h2 className="fw-semibold fs-3">
          Rooms we recommend for our customers
        </h2>
        <ButtonOutline link="/rooms">View All Rooms</ButtonOutline>
      </header>
      <Slider slides={rooms} />
    </section>
  );
};

export default RecommendedRooms;
