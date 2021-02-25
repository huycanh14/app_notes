<template>
    <div class="row" style="margin:0; padding:0; "><!-- 
			<button class="btn btn-success content--action-push">Push</button> -->
		<div id="menu-toggle" class="col-2 return-left">
			<ul>
				<li><img src="images/icon_note.png" alt="icon note" style="width: 50%;"></li>
				<li class="active" data-action="get-list" onclick="actionChangeColor(this);"><a href="#" class="fas fa-list-ol list-action"> Danh sách</a></li>
				<li class="" data-action="add-note" onclick="actionChangeColor(this);"><a href="#add-appoinment" class="fas fa-plus-square list-action"> Them note</a></li>
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