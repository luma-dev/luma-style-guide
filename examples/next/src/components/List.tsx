import * as React from 'react';
import type { FC } from 'react';
import ListItem from './ListItem';
import type { User } from '../interfaces';

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
