<template>
    <div class="row" style="margin:0; padding:0; "><!-- 
			<button class="btn btn-success content--action-push">Push</button> -->
		<div id="menu-toggle" class="col-2 return-left">
			<ul>
				<li><img src="images/icon_note.png" alt="icon note" style="width: 50%;"></li>
				<li class="active" data-action="get-list"  onclick="actionChangeColor(this);">
					<router-link
						:to="{ name: 'index' }"
						class="fas fa-list-ol list-action  w-100 h-100"
					> Danh sách</router-link>	
				</li>
				<li class="" data-action="add-note" onclick="actionChangeColor(this);">
					<router-link
						:to="{ name: 'add' }"
						class="fas fa-plus-square list-action w-100 h-100"
					> Thêm note</router-link>
				</li>
			</ul>

		</div>
		<div class="background--gray"></div>
	</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>