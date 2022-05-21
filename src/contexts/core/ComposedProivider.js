const ComposedProivider = (props) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight(
        (prev, Component) => (
          <Component>{prev}</Component>
        ),
        children
      )}
    </>
  );
};

export default ComposedProivider;
