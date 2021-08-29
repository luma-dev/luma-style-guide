import * as React from 'react';
import type { FC } from 'react';
import Link from 'next/link';

import type { User } from '../interfaces';

type Props = {
  data: User;
};

const ListItem: FC<Props> = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
