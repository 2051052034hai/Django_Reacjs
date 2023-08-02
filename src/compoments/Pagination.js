import Pagination from 'react-bootstrap/Pagination';
import React from 'react';

function AdvancedExample() {
  return (
    <Pagination>
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item disabled>{10}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
}

export default AdvancedExample;