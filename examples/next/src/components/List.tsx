import type { FC } from 'react';
import * as React from 'react';
import type { User } from '../interfaces';
import ListItem from './ListItem';

type Props = {
  items: User[];
};

const List: FC<Props> = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
