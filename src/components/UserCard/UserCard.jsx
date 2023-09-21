import ava from '../../DefaultPics/def-avatar.jpg';
import { useSelector } from 'react-redux';
import { getUserName } from '../../redux/selectors';
window.onload = () => {
  const uploadAvatar = document.getElementById('upload-avatar');
  const uploadBtn = document.getElementById('upload-btn');
  uploadBtn.addEventListener('click', function () {
    uploadAvatar.click();
  });
};



const UserCard = () => {
   const userName = useSelector(getUserName);
  return (
    <div>
      <div>
        <img width="370" src={ava} alt="dvfg" />
        <input type="file" id="upload-avatar" hidden="hidden" />
        <button id="upload-btn">AVA</button>
      </div>
      <div>
        <p>{userName}</p>
        <p>User</p>
      </div>
      <div>
        <div>
          <p>Daily calorie intake</p>
          <p>2200</p>
        </div>
        <div>
          <p>Daily norm of sports</p>
          <p>110 min</p>
        </div>
      </div>
      <p>
        We understand that each individual is unique, so the entire approach to
        diet is relative and tailored to your unique body and goals.
      </p>
      <button>Logout</button>
    </div>
  );
};


export default UserCard;
