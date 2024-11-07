using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace qaeryhub.Migrations
{
    public partial class addingmatchingperformancestouser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "GeneralPerformances",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_GeneralPerformances_UserId",
                table: "GeneralPerformances",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_GeneralPerformances_Users_UserId",
                table: "GeneralPerformances",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GeneralPerformances_Users_UserId",
                table: "GeneralPerformances");

            migrationBuilder.DropIndex(
                name: "IX_GeneralPerformances_UserId",
                table: "GeneralPerformances");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "GeneralPerformances");
        }
    }
}
