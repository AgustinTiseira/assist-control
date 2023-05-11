import GroupsContainer from '@/containers/Groups/GroupsContainer';
export interface GroupsProps {}

const Groups = () => {
  return (
    <div className={'h-full px-5'}>
      <GroupsContainer />
    </div>
  );
};

export default Groups;
