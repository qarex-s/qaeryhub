using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace qaeryhub.Migrations
{
    public partial class addingFourModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AuditsPerformances_PerformanceInfos_PerformanceId",
                table: "AuditsPerformances");

            migrationBuilder.RenameColumn(
                name: "NamePerformance",
                table: "PerformanceInfos",
                newName: "NamePerformanceCategory");

            migrationBuilder.RenameColumn(
                name: "PerformanceId",
                table: "AuditsPerformances",
                newName: "PerformanceCategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_AuditsPerformances_PerformanceId",
                table: "AuditsPerformances",
                newName: "IX_AuditsPerformances_PerformanceCategoryId");

            migrationBuilder.AddColumn<string>(
                name: "FormFactor",
                table: "GeneralPerformances",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_AuditsPerformances_PerformanceInfos_PerformanceCategoryId",
                table: "AuditsPerformances",
                column: "PerformanceCategoryId",
                principalTable: "PerformanceInfos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AuditsPerformances_PerformanceInfos_PerformanceCategoryId",
                table: "AuditsPerformances");

            migrationBuilder.DropColumn(
                name: "FormFactor",
                table: "GeneralPerformances");

            migrationBuilder.RenameColumn(
                name: "NamePerformanceCategory",
                table: "PerformanceInfos",
                newName: "NamePerformance");

            migrationBuilder.RenameColumn(
                name: "PerformanceCategoryId",
                table: "AuditsPerformances",
                newName: "PerformanceId");

            migrationBuilder.RenameIndex(
                name: "IX_AuditsPerformances_PerformanceCategoryId",
                table: "AuditsPerformances",
                newName: "IX_AuditsPerformances_PerformanceId");

            migrationBuilder.AddForeignKey(
                name: "FK_AuditsPerformances_PerformanceInfos_PerformanceId",
                table: "AuditsPerformances",
                column: "PerformanceId",
                principalTable: "PerformanceInfos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
