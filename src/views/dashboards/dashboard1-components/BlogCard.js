import user1 from "../../../assets/images/profile/user-1.jpg";
import user2 from "../../../assets/images/profile/user-2.jpg";
import user3 from "../../../assets/images/profile/user-6.jpg";
import img1 from "../../../assets/images/blog/blog-img1.jpg";
import img2 from "../../../assets/images/blog/blog-img2.jpg";
import img3 from "../../../assets/images/blog/blog-img3.jpg";

// import user1 from "/src/assets/images/profile/user-1.jpg";
// import user2 from "/src/assets/images/profile/user-2.jpg";
// import user3 from "/src/assets/images/profile/user-6.jpg";
// import img1 from "/src/assets/images/blog/blog-img1.jpg";
// import img2 from "/src/assets/images/blog/blog-img2.jpg";
// import img3 from "/src/assets/images/blog/blog-img3.jpg";

import { TbPoint } from "react-icons/tb";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Badge } from "flowbite-react";

const BlogCardsData = [
  {
    avatar: user1,
    coveravatar: img1,
    read: "2 min Read",
    title: "As yen tumbles, gadget-loving Japan goes for secondhand iPhones",
    category: "Social",
    name: "Georgeanna Ramero",
    view: "9,125",
    comments: "3",
    time: "Mon, Dec 19",
    url: ""
  },
  {
    avatar: user2,
    coveravatar: img2,
    read: "2 min Read",
    title: "Intel loses bid to revive antitrust case against patent foe Fortress",
    category: "Gadget",
    name: "Georgeanna Ramero",
    view: "4,150",
    comments: "38",
    time: "Sun, Dec 18",
    url: ""
  },
  {
    avatar: user3,
    coveravatar: img3,
    read: "2 min Read",
    title: "COVID outbreak deepens as more lockdowns loom in China",
    category: "Health",
    name: "Georgeanna Ramero",
    view: "9,480",
    comments: "12",
    time: "Sat, Dec 17",
    url: ""
  },
];

const BlogCards = () => {
  return (
    // <div className="row">
    //   {BlogCardsData.map((item, i) => (
    //     <div className="col-12 col-md-4 mb-4" key={i}>
    //       <Link to={item.url} className="text-decoration-none">
    //         <div className="card shadow-sm border-0 rounded-4">
    //           <div className="position-relative">
    //             <img src={item.coveravatar} alt="Blog Cover" className="card-img-top rounded-top-4" />
    //             <span className="badge bg-light text-dark position-absolute top-2 end-2 p-2 shadow-sm rounded-2">
    //               {item.read}
    //             </span>
    //           </div>
    //           <div className="card-body">
    //             <div className="d-flex align-items-center mb-3">
    //               <img src={item.avatar} className="rounded-circle me-2" alt="user" style={{ width: "40px", height: "40px" }} />
    //               <span className="badge bg-light text-dark fw-normal px-2 py-1">
    //                 {item.category}
    //               </span>
    //             </div>
    //             <h5 className="card-title text-primary fw-bold mt-3">
    //               {item.title}
    //             </h5>
    //             <div className="d-flex align-items-center mt-2 text-secondary">
    //               <div className="me-3 d-flex align-items-center">
    //                 <Icon icon="solar:eye-outline" height="18" className="me-1" />
    //                 <span>{item.view}</span>
    //               </div>
    //               <div className="me-3 d-flex align-items-center">
    //                 <Icon icon="solar:chat-line-outline" height="18" className="me-1" />
    //                 <span>{item.comments}</span>
    //               </div>
    //               <div className="d-flex align-items-center ms-auto">
    //                 <TbPoint size={15} className="me-1" />
    //                 <span>{item.time}</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   ))}
    // </div>
    <div className="row g-4">
    {BlogCardsData.map((item, i) => (
      <div className="col-lg-4 col-12" key={i}>
        <Link to={item.url} className="text-decoration-none">
          <div className="card shadow-sm bg-white rounded overflow-hidden">
            <div className="position-relative">
              <img src={item.coveravatar} className="card-img-top" alt="materialm" />
              <span className="badge bg-secondary position-absolute bottom-0 end-0 m-2">
                {item.read}
              </span>
            </div>

            <div className="card-body">
              <img
                src={item.avatar}
                className="rounded-circle border border-white position-relative mb-3"
                alt="user"
                style={{ width: "40px", height: "40px", marginTop: "-20px" }}
              />
              <span className="badge bg-secondary d-flex mb-3 text-center" style={{ width: "16%" }}>{item.category}</span>
              <h5 className="card-title text-truncate">{item.title}</h5>

              <div className="d-flex align-items-center mt-3">
                <div className="d-flex align-items-center me-4">
                  <Icon icon="solar:eye-outline" height="18" className="text-dark" />
                  <span className="ms-1 text-muted">{item.view}</span>
                </div>
                <div className="d-flex align-items-center me-4">
                  <Icon icon="solar:chat-line-outline" height="18" className="text-dark" />
                  <span className="ms-1 text-muted">{item.comments}</span>
                </div>
                <div className="d-flex align-items-center ms-auto">
                  <TbPoint size={15} className="text-dark" />
                  <span className="ms-1 text-muted">{item.time}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>

  );
};

export default BlogCards;
