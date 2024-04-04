import { Meta } from '@storybook/react';
import TagsList from '../components/TagsList';


const meta: Meta<typeof TagsList> = {
    component: TagsList,
    title: 'Table/TagsList',
}
export default meta;

export const Template = () => <TagsList tagsData={[{ count: 100, name: 'JavaScript', }, { count: 200, name: 'React', }]}
    sortBy='name'
    setSortBy={() => { }}
    sortOrder='asc'
    setSortOrder={() => { }} />



