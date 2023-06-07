import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import {MdOutlineStorage} from "react-icons/md";
import "./Sidebar.css";
import { BsPencil } from "react-icons/bs";
import StarRating from './StarRating';

const UpperSidebar = ({isOpen,toggle}) => {
    //I took the dummy value for rating
    const rating=3;
  return (
   <>
   <div className="threedotsicon">
            {isOpen ? (
              <BsThreeDotsVertical onClick={toggle} />
            ) : (
              <MdOutlineStorage onClick={toggle} />
            )}
          </div>
          <div className={isOpen?"Avatardiv":"close-Avatardiv"}>
            <img
              className="Avatar"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIoAigMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcDBAUCAf/EADYQAAICAQICBQkHBQAAAAAAAAABAgMEBREGIRIxQVFhE1JxcoGRobHBIiM1QlNz0RUyYoKy/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwC0gAaZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw5WVj4lflMq6FUO+T239HeaWvavDScXpcp3z5V179fi/BFe5eVfm3yuyrHZY+19no7iidS4r0mMuirbZLvVUtjfwdUwc/liZEZy8zmpe5lYH2LcZKUW1JPdNdaBq2gRrhfiCeY1h50979vu7Hy8p4PxJKQAAAAAAAAAAAAAAAx5Dcce2S61Bte4Cudfznn6pdbvvCLcK13RXL49ftOcECxKAAo91WTpshZVLozg1KMl2MtDTspZuDRlR2XlYKTS7H2r37lWFgcHSctCrT7LJJe8yrtgAAAAAAAAAAAAB8nHpwlHzk0fQBU1sHVbOuXKUJOL9Kex5JBxhpksbPeXXH7nIe7a/LPtXt6/eR8sKAAIFi8LUunQsbf86c/Y3/GxBtKwLdSza8etNKT3nLzY9rLNrhGqqFVcejCEVGK7klsiK9AAAAAAAAAAAAAAAAx30VZNMqb4Kyua2lF9TIrn8HPpSlp+QlHsru3+a/gld1tdFbsushCC65SaSORk8UaVQ3GNs7Wv0oN/F7ICMvhXVU9vJ1PxViNrE4OzJy3yr6qod0N5yfyR0nxlhJ8sbI2/wBf5M1PFumWPaflqvXr3XwYHS03TcbTKfJYsGt+cpy/uk/Fm4a+JmYuZHpYt9dq7ei+a9hsAAAAAAAAAAAAAAAjWt8UV40pUaf0bbVydj5xi/Dv+Rr8Wa64ylp+FPbbldZF8/VX1IiBmy8vIzbPKZdsrZ98n1ehdhhAKgACj1XOVc1ZXJxmuqUXs0SXRuK7qpRq1Pe2vqVyX2l6V2kYBFi2Kra7qo20zjOuS3jKL3TPZXnDutT0u/ydrcsSb+3HzP8AJfUsGEozhGcJKUZLdNdTRB6AAAAAAAAObxDqP9M02dsX97P7FXrd/s6zpEG42y3bqUMZP7FEFv6z5/LYCOttttttt7tvtABQABUAAAAAAmXBOpO2qen2y3lWulVv5vavZ9SGm5pGW8LUsbIT2UZrpeMXyfwIqzwF1d4IAAAAAAVlrtru1nNm/wBaS9z2+hZqKs1H8Ry/35/9MFa4ANIAAAAAAAAAAC0tOsd2n4tr650wl8DZNHQvwTB/Yh8jeMqAAD//2Q=="
            ></img>
            <div>
              <div
                className="Welcome"
                style={{ display: isOpen ? "block" : "none" }}
              >
                Welcome,UserName
              </div>
              <div className={isOpen ? "ShopName" : "closeShopName"}>
                Aardhana Medical
              </div>
              <div
                className="Address"
                style={{ display: isOpen ? "block" : "none" }}
              >
                <GrLocation /> Near Hind Mata School
              </div>
              <div
                className="Stars"
                style={{ display: isOpen ? "block" : "none" }}
              >
               <StarRating rating={rating}/>
              </div>
            </div>
          </div>
          <div
            className={
              isOpen ? "ProfileCompletiondiv" : "CloseProfileCompletiondiv"
            }
          >
            Profile {rating}/5 complete
            <BsPencil style={{ border: "border: 0.2px solid #FFFFFF;" }} />
          </div>
   
   
   </>
  )
}

export default UpperSidebar