import "../../css/dlayout.scss";

const NavProfPic = ({ img }) => (
  <div class="image-cropper">
    <img src={img} alt="avatar" class="profile-pic" />
  </div>
);

export default NavProfPic;
