<template>
    <div class="my-4">
        <content-placeholders>
            <content-placeholders-img v-show="img" />
            <content-placeholders-heading :img="imgShow" />
            <content-placeholders-text :lines="line" />
        </content-placeholders>
    </div>
</template>

<script>
export default {
    props: ['line','imgShow','img']    
}
</script>