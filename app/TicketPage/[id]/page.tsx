import React from 'react';

type TicketPageProps = {
  params: {
    id: number;
  };
};

const TicketPage = (props: TicketPageProps) => {
  const { params } = props;

  return <div>TicketPage {params.id}</div>;
};

export default TicketPage;
