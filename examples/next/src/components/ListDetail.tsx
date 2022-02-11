import type { FC } from 'react';
import * as React from 'react';
import type { User } from '../interfaces';

type ListDetailProps = {
  item: User;
};

const ListDetail: FC<ListDetailProps> = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;
