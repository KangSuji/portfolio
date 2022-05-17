<template>
  <div>
    <footer>
      <div>You're visiting this because you're awsome</div>
      <div>&copy; {{ new Date().getFullYear() }} KANG SUJI</div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  footer {
    width: 100%;
    height: 100px;
    margin-top: 200px ;
    border-top: 1px solid rgba(56,67,100, 0.2);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: rgba(56,67,100, 0.5);
    line-height: 40px;
  }
</style>