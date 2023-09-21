import  TitlePage  from 'components/TitlePage/TitlePage';
import UserCard from 'components/UserCard/UserCard';
import  UserForm  from 'components/UserForm/UserForm';
import { Root } from '../../components/CommonStyled/Common.styled';
const ProfilePage = () => {
    return (
      <div>
        <Root>
          <TitlePage titleText={'Profile Settings'} />
          <UserCard />
          <UserForm />
        </Root>
      </div>
    );
};


export default ProfilePage;
