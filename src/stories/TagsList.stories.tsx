import { Meta } from '@storybook/react';
import TagsList from '../components/TagsList';


const meta: Meta<typeof TagsList> = {
    component: TagsList,
    title: 'Table/TagsList',
}
export default meta;

export const Template = () => <TagsList tagsData={[{ name: 'JavaScript', count: 100 }, { name: 'React', count: 200 }]}
    sortBy='name'
    setSortBy={() => { }}
    sortOrder='asc'
    setSortOrder={() => { }} />



